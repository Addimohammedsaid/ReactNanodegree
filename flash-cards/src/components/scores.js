import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Scores = (props) =>{
    const { answeredQuestions, createdQuestions } = props;
  
    return (
      <div style={{padding : "20px"}}>
        <TableContainer component={Paper}>
          <Table         
            size="small"
            aria-label="a dense table"
          >
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Score
                </TableCell>
                <TableCell align="right">
                  {answeredQuestions + createdQuestions}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Answered questions
                </TableCell>
                <TableCell align="right">{answeredQuestions}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Created questions
                </TableCell>
                <TableCell align="right">{createdQuestions}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  
}

export default Scores;