import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export default (start: any, end: any, data: any) => {
  const range = moment.range(start, end);
  return data.filter((mail: any) => range.contains(mail.date));
};
