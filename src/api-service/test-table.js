import service from "@/plugins/axios";

const TestTable = {
  getDataTable: (params = {}) => service.get('permissions', params),
  deleteData: (id) => service.delete(`permissions/${id}`)
}

export default TestTable