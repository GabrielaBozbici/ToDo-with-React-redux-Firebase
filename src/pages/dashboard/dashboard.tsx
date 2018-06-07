import { connect } from 'react-redux';
import * as React from 'react';
import { ApplicationState } from '../../redux/reducers';
import { getTodos } from '../../redux/todo/creators';
// import { firebaseDb } from '../../firebase';

// import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
// const logo = require('../../assets/logo.svg');

interface StateProps {
  auth: any;
}
interface DispatchProps { getTodos: Function; }
interface OwnOptionalProps {}
interface OwnProps extends Partial<OwnOptionalProps> { }

type Props = StateProps & DispatchProps & OwnProps;

class Dashboard extends React.Component<Props, {}> {
  componentWillMount() {
    const { 
      auth,
      getTodos
    } = this.props;
    // make initial api calls or connect to firebase
    getTodos(auth.user.uid);
}

  render() {
    const { children } = this.props;
    return (
      <section className="Dashboard">
        <section className="App-Content">
          {children}
        </section>
      </section>
    );
  }
}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      auth: state.auth,
    };
  },
  {
    getTodos
  },
)(Dashboard);
