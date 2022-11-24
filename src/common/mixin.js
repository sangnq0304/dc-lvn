import moment from "moment";
import { FORMAT_DATE } from "@/common/const-date";

export default {
  filters: {
    formatDate(v) {
      if (!moment(v).isValid()) return "";
      return moment(v).format(FORMAT_DATE);
    },

    formatNumberPhone(v) {
      let numberPhone = v.substring(0, 10);
      const size = numberPhone.length;
      if (size < 4) {
        return  numberPhone
      } else if (size < 7) {
        numberPhone = numberPhone.substring(0, 3) + '.' + numberPhone.substring(3, 6);
      } else {
        numberPhone = numberPhone.substring(0, 3) + '.' + numberPhone.substring(3, 6) + '.' + numberPhone.substring(6, 10);
      }
      return numberPhone;
    },
  },
};