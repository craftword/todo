import DenseAppBar from "../components/AppHeader"
import MainContent from "../components/MainContent"
import Grid from '@material-ui/core/Grid';


export default () => (
  <div>
    <DenseAppBar />
    <Grid container spacing={24}>
        <Grid item xs={3}>
            
        </Grid>
        <Grid item xs={6}>
            <MainContent />
        </Grid>
    </Grid>
    
  </div>
)
