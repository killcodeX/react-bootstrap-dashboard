import React, { useContext, useEffect } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import Tble from './Table';

import { GlobalContext } from '../context/stateManager';

function TableList(){

  const { getCandidates, candidates } = useContext(GlobalContext);

  useEffect(() => {
    getCandidates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(candidates)

  if(candidates){
    const arr = candidates.map(c => c._id)
    console.log('coming from arrarr',arr)
  }

  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="Striped Table with Hover"
              category="Here is a subtitle for this table"
              ctTableFullWidth
              ctTableResponsive
              content={
                <Table striped hover>
                  <thead>
                    <tr>
                      {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                    </tr>
                  </thead>
                  <tbody>
                    {tdArray.map((prop, key) => {
                        return (
                          <Tble key={key} prop={prop}>
                          </Tble>
                        );
                      })}
                  </tbody>
                </Table>
              }
            />
          </Col>

          <Col md={12}>
            <Card
              plain
              title="Striped Table with Hover"
              category="Here is a subtitle for this table"
              ctTableFullWidth
              ctTableResponsive
              content={
                <Table hover>
                  <thead>
                    <tr>
                      {thArray.map((prop, key) => {
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tdArray.map((prop, key) => {
                      return (
                        <tr key={key}>
                          {prop.map((prop, key) => {
                            return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              }
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default TableList;
