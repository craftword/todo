import DenseAppBar from "../components/AppHeader"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react'
import fetch from 'isomorphic-unfetch'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    marginRight: theme.spacing.unit,
  },
  section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
  },
  section2: {
    margin: theme.spacing.unit * 2,
  },
   section3: {
    margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    padding:theme.spacing.unit,
        
  },
  
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
   button: {
    margin: theme.spacing.unit,
  },
  table: {
    minWidth: 400,
  },
  margin: {
    margin: theme.spacing.unit,
  },
});


class MainContent extends React.Component {
  static async getInitialProps() {
    const res = await fetch('http://localhost:3000/api/listItems')
    const rows = await res.json()
    return { rows }
  }
  componentWillMount() {
    this.setState({
      rows: rows
    })
    console.log(rows)
  }
  constructor(props) {
    super(props);
    
    this.state = {
        itemname: '',
        rows:[],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);  }


handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  })
}

onSubmit(e)  {
  e.preventDefault();
  const newItemValue = this.state.itemname;
  const rows = this.state.rows;  
  rows.unshift({
      index: rows.length+1, 
      value: newItemValue 
      
    });
 
  this.setState({rows: rows});  
}

removeItem(itemIndex) {
    const rows = this.state.rows
     rows.splice(itemIndex, 1);
     this.setState({rows: rows}); 
  }
    
  render() {
    const { classes } = this.props;
     const { itemname, rows} = this.state;
     console.log(rows);
    return (
      <div>
         <DenseAppBar />
        <Grid container spacing={24}>
            <Grid item xs={3}>
                
            </Grid>
            <Grid item xs={6}>
              <div className={classes.root}>
                <div className={classes.section1}>
                  <Grid container alignItems="center">
                    <Grid item xs>
                      <Typography gutterBottom variant="h5">
                        Task
                      </Typography>
                    </Grid>
                  </Grid>
                    <div className={classes.container}>
                        <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                              <Input
                                  className={classes.input}
                                  name="itemname" autoComplete="itemname" value={itemname} 
                                  onChange={this.handleChange} autoFocus 
                                  placeholder="add a new todo..."
                              />
                              <Button variant="contained" color="primary" className={classes.button} type="submit" >
                                  Add Task
                              </Button>
                          </form>
                      </div>
                      
                </div>
                <Divider variant="middle" />
                <div className={classes.section2}>
                  <Typography gutterBottom variant="h5">
                    List Of Task To Do
                  </Typography>
                  <Paper className={classes.root}>
                      <Table className={classes.table}>
                          <TableHead>
                              <TableRow>
                                  <TableCell>Task Items</TableCell>
                                  <TableCell align="right"></TableCell>                        
                              </TableRow>
                          </TableHead>
                          <TableBody>
                            
                            {rows.map(row => (
                                
                                  <TableRow key={row.index}>
                                  <TableCell component="th" scope="row">
                                      {row.value}
                                  </TableCell>
                                  <TableCell align="right">
                                      <IconButton aria-label="Delete" className={classes.margin} onClick={this.removeItem}>
                                          <DeleteIcon fontSize="small"/>
                                      </IconButton>                            
                                  </TableCell>                       
                                  </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                  </Paper>
                </div>
                <div className={classes.section3}>
                    <Typography>
                        Produced By Abimbola Olaitan &copy;2019
                      </Typography> 
                </div>
              </div>
            </Grid>
        </Grid>
      </div>
    )
  }
}

MainContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainContent);