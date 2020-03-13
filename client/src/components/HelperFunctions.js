import moment from "moment";

export const durationInDays = (t1, t2) =>
  moment.duration(moment(t1).diff(moment(t2)))._milliseconds /
  (1000 * 60 * 60 * 24);

export const formatDate = date => moment(date).format("MMMM Do YYYY");
