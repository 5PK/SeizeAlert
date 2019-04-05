import React, { Component } from 'react';
import { StyleSheet, View, ScrollView,Button,Icon } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
 
// This will be converted to the history page a little later.
export default class SeizureHistory extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: "History",
        headerLeft:(
          <Button
            icon={
              <Icon
                name="menu"
              />
            }
            title=""
            onPress={() => navigation.toggleDrawer()}
            type="clear"
            buttonStyle={{marginLeft: 10}}
          />)
      });

    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Test', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'],
          widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
        }
      }
     
      render() {
        const state = this.state;
        const tableData = [];
        for (let i = 0; i < 30; i += 1) {
          const rowData = [];
          for (let j = 0; j < 9; j += 1) {
            rowData.push(`${i}${j}`);
          }
          tableData.push(rowData);
        }
     
        return (
          <View style={styles.container}>
            <ScrollView horizontal={true}>
              <View>
                <Table borderStyle={{borderColor: '#C1C0B9'}}>
                  <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                </Table>
                <ScrollView style={styles.dataWrapper}>
                  <Table borderStyle={{borderColor: '#C1C0B9'}}>
                    {
                      tableData.map((rowData, index) => (
                        <Row
                          key={index}
                          data={rowData}
                          widthArr={state.widthArr}
                          style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                          textStyle={styles.text}
                        />
                      ))
                    }
                  </Table>
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        )
      }
    }
     
    const styles = StyleSheet.create({
      container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
      header: { height: 50, backgroundColor: '#537791' },
      text: { textAlign: 'center', fontWeight: '100' },
      dataWrapper: { marginTop: -1 },
      row: { height: 40, backgroundColor: '#E7E6E1' }
    });