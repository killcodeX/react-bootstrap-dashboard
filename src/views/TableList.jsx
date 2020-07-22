import React, { useContext, useEffect } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray } from "variables/Variables.jsx";
import Tble from './Table';

import { GlobalContext } from '../context/stateManager';

function TableList(){

  const { getCandidates, updateCandidate, candidates } = useContext(GlobalContext);

  useEffect(() => {
    getCandidates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [candidates]);

  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="Candidate Details"
              category="Here is a Candidate table"
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
                    {candidates.map((cand, key) => {
                        return (
                          <Tble key={key} candidate={cand} updateCandidate={updateCandidate}>
                          </Tble>
                        );
                      })}
                  </tbody>
                </Table>
              }
            />
          </Col>

          {/* <Col md={12}>
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
                    {candidates.map((cand, key) => {
                          return (
                            <Tble key={key} candidate={cand}>
                            </Tble>
                          );
                        })}
                  </tbody>
                </Table>
              }
            />
          </Col> */}
        </Row>
      </Grid>
    </div>
  );
}

export default TableList;
