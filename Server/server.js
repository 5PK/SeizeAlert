import 'dotenv/config';
//import cors from 'cors';
import express from 'express';

import bodyParser from 'body-parser';


import models, { sequelize } from './models';

import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
    req.context = {
        models,
        me: await models.User.findByLogin('rwieruch'),
    };
    next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/contacts', routes.contact);
app.use('/alerts', routes.alert);

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
    if (eraseDatabaseOnSync) {
        createUsersWithContacts();
        createSeizureData();
    }

    app.listen(process.env.PORT, () =>
        console.log(`Example app listening on port ${process.env.PORT}!`),
    );
});



const createSeizureData = async() => {
    await models.Alert.create(
        {
            
            dateOccured: new Date(),
            armVariance: 100,
            ankleVariance: 100
        }
    );
    await models.Alert.create(
        {
            
            dateOccured: new Date(),
            armVariance: 100,
            ankleVariance: 100
        }
    );
    await models.Alert.create(
        {
            
            dateOccured: new Date(),
            armVariance: 100,
            ankleVariance: 100
        }
    );
    await models.Alert.create(
        {
            
            dateOccured: new Date(),
            armVariance: 100,
            ankleVariance: 100
        }
    );
    await models.Alert.create(
        {
            
            dateOccured: new Date(),
            armVariance: 100,
            ankleVariance: 100
        }
    );
    await models.Alert.create(
        {
            
            dateOccured: new Date(),
            armVariance: 100,
            ankleVariance: 100
        }
    );
    await models.Alert.create(
        {
            
            dateOccured: new Date(),
            armVariance: 100,
            ankleVariance: 100
        }
    );
    await models.Alert.create(
        {
            
            dateOccured: new Date(),
            armVariance: 100,
            ankleVariance: 100
        }
    );
}

const createUsersWithContacts = async () => {
    await models.User.create(
        {
            email: 'ktran',
            contacts: [
                {
                    name: 'Luke',
                    avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    nickName: 'The T-SQL lover',
                    phoneNumber: 9054059920,
                    isQuickContact: true,
                    email: 'luke@thompson.ca'
                },
            ],
        },
        {
            include: [models.Contact],
        },
    );

    await models.User.create(
        {
            email: 'Chungloid',
            contacts: [
                {
                    name: 'Carla',
                    avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    nickName: 'The anime character',
                    phoneNumber: 9054059920,
                    isQuickContact: false,
                    email: 'Carla@sison.ca'
                },
                {
                    name: 'Riley',
                    avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    nickName: 'The rogue class',
                    phoneNumber: 9054059920,
                    isQuickContact: false,
                    email: 'Riley@hancox.ca'
                },
            ],
        },
        {
            include: [models.Contact],
        },
    );
};