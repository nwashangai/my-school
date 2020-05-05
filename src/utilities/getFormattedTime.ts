import moment from 'moment';

export default (date: any) =>
  moment(Date.now()).format('YYYY') === date.format('YYYY')
    ? moment(Date.now()).format('YYYY/MM/DD') === date.format('YYYY/MM/DD')
      ? date.format('hh:mm')
      : date.format('MMM DD')
    : date.format('YYYY/MM/DD');
