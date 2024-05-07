import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => {
    let aType = 'red';
    if (alert.alertType === 'red') {
      return (
        <div
          key={alert.id}
          className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6`}
          role='alert'
        >
          {alert.msg}
        </div>
      );
    } else if (alert.alertType === 'orange') {
      return (
        <div
          key={alert.id}
          className={`bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded relative mb-6`}
          role='alert'
        >
          {alert.msg}
        </div>
      );
    } else if (alert.alertType === 'green') {
      return (
        <div
          key={alert.id}
          className={`bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6`}
          role='alert'
        >
          {alert.msg}
        </div>
      );
    } else {
      return (
        <div
          key={alert.id}
          className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6`}
          role='alert'
        >
          {alert.msg}
        </div>
      );
    }
  });

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
