import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    appBar: {
        borderRadius: 35,
        margin: '15px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(15,77,146)'
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },
}));