import _ from 'lodash';

function groupByAddress(transactions) {
    return _.groupBy(transactions, 'from_address');

}

function TxCountByAddress(transactions) {
    return _.countBy(transactions, 'from_address');
}

export default {
    groupByAddress,
    TxCountByAddress
}