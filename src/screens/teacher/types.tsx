// import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Button,
  Center,
  Checkbox,
  View,
  Heading,
  AddIcon,
  DeleteIcon,
} from 'native-base';
import React, { ClassType, Component, useEffect, useState } from 'react';
import { Alert, StyleSheet, TextInput } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

const styles = StyleSheet.create({
  text: { textAlign: 'center' },
  btnText: { textAlign: 'center' },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: 'gray.800',
  },
  head: { height: 40, backgroundColor: 'amber.200' },
  row: { flexDirection: 'row', backgroundColor: 'gray.800' },
  btn: { width: 28, height: 18, backgroundColor: 'gray.800', borderRadius: 2 },
});

const stylesPT2 = StyleSheet.create({
  input: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 80,
    borderRadius: 4,
  },
});

export default class Types extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tableHead: ['', '', '', 'Type'],
      tableData: [
        ['', <TextInput style={stylesPT2.input} />],
        ['', <TextInput style={stylesPT2.input} />],
        ['', <TextInput style={stylesPT2.input} />],
        ['', <TextInput style={stylesPT2.input} />],
      ],
    };
  }

  _alertIndex(index: any) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data: any, index: any) => (
      <Checkbox
        value="true"
        onChange={() => this._alertIndex(index)}
      ></Checkbox>
    );

    return (
      <View style={styles.container}>
        <Center>
          <Heading
            size="xl"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}
            fontWeight="semibold"
            paddingBottom="30"
            paddingTop="2%"
          >
            Assignment Types
          </Heading>
        </Center>
        <Center>
          <Table borderStyle={{ borderColor: 'transparent' }}>
            <Row
              data={state.tableHead}
              style={styles.head}
              textStyle={styles.text}
            />
            {state.tableData.map((rowData: any, index: any) => (
              <TableWrapper key={index} style={styles.row}>
                {rowData.map((cellData: any, cellIndex: any) => (
                  <Cell
                    key={cellIndex}
                    data={cellIndex === 0 ? element(cellData, index) : cellData}
                    textStyle={styles.text}
                  />
                ))}
              </TableWrapper>
            ))}
          </Table>

          <Center>
            <View
              style={{
                alignSelf: 'stretch',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Button
                style={{ marginTop: 30, marginRight: 21, borderRadius: 30 }}
              >
                <AddIcon size="5" mt="0.5" color="white" />
              </Button>
              <Button style={{ marginTop: 30, borderRadius: 30 }}>
                <DeleteIcon size="5" mt="0.5" color="white" />
              </Button>
            </View>
          </Center>
        </Center>
      </View>
    );
  }
}
