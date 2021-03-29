<template>
  <div>
    <el-card class="box-card">
      <div class="group">到云项目组第18组</div>
      <el-row>
        <el-col :span="4" v-for="(o, index) in group" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="o.avata" class="image">
            <div style="padding: 14px;">
              <h1>{{o.name}}</h1>
              <div class="bottom clearfix">
                <time class="time">学号 {{ o.sid }}</time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ManageBoard",
  data() {
    return {
      currentDate: new Date(),
      group: [
        {
          name: '林宇航',
          avata: 'https://avatars.githubusercontent.com/u/30885631?v=4',
          sid: '200327140',
          github: 'https://github.com/YHCClin'
        },
        {
          name: '郑西坤',
          sid: '200327140',
          avata: 'https://avatars.githubusercontent.com/u/30885631?v=4',
          github: 'https://github.com/YHCClin'
        },
        {
          name: '郑佳晨',
          sid: '200327140',
          avata: 'https://avatars.githubusercontent.com/u/30885631?v=4',
          github: 'https://github.com/YHCClin'
        },
        {
          name: '郑超凡',
          sid: '200327140',
          avata: 'https://avatars.githubusercontent.com/u/30885631?v=4',
          github: 'https://github.com/YHCClin'
        }
      ]
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  position: relative;
  width: 100%;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.group {
  font-size: 50px;
  margin: 30px;
}
</style>
