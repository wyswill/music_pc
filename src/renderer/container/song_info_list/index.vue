<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="serialNum" width="180"></el-table-column>
    <el-table-column prop="coverUrl" width="180"></el-table-column>
    <el-table-column prop="description" width="180"></el-table-column>
    <el-table-column prop="listenerCount" width="180"></el-table-column>
    <el-table-column prop="likedCount" width="180"></el-table-column>
    <el-table-column prop="createTime" width="180"></el-table-column>
  </el-table>
</template>

  <script>
export default {
  /* 
   id,
        serialNum,
        coverUrl,
        description,
        listenerCount,
        likedCount,
        createTime
  */
  props: ["tableData"]
};
</script>