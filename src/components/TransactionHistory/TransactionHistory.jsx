import PropTypes from 'prop-types';
import {
  Tablet,
  TabletHead,
  TabletTr,
  TabletTh,
  TabletTd,
  TabletBody,
} from './TransactionHistory.module.jsx';
export const TransactionHistory = ({ transactions }) => {
  return (
    <Tablet>
      <TabletHead>
        <TabletTr>
          <TabletTh>Type</TabletTh>
          <TabletTh>Amount</TabletTh>
          <TabletTh>Currency</TabletTh>
        </TabletTr>
      </TabletHead>
      <TabletBody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TabletTr key={id}>
              <TabletTd>{type}</TabletTd>
              <TabletTd>{amount}</TabletTd>
              <TabletTd>{currency}</TabletTd>
            </TabletTr>
          );
        })}
      </TabletBody>
    </Tablet>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
    })
  ),
};
