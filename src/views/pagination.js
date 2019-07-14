/* eslint-disable */
import { value, watch, onMounted } from 'vue-function-api'
// 后端分页逻辑
function usePagination(changeCallback) {
  const currentPage = value(1);
  const total = value(0);
  const pageSize = value(10);
  const handleCurrentChange = (val) => {
    console.log(`当前页: ${val}`);
    currentPage.value = val;
    changeCallback()
  }

  const handleSizeChange = (val) => {
    console.log(`每页 ${val} 条`);
    pageSize.value = val;
    changeCallback()
  }

  const setTotal = (val) => {
    total.value = val;
  }

  return {
    currentPage,
    pageSize,
    total,
    handleCurrentChange,
    handleSizeChange,
    setTotal
  }

}

export default usePagination