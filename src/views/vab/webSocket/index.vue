<template>
  <div class="webSocket-container">
    <vab-page-header description="WebSocket 实时通信功能演示，支持消息发送和接收" :icon="['fas', 'comments']" title="WebSocket" />

    <el-row :gutter="20">
      <el-col :lg="8" :md="12" :sm="24" :xl="8" :xs="24">
        <el-alert :closable="false" type="success">webSocket连接{{ status }}！</el-alert>
        <br />
        <el-form ref="form" label-width="100px" :model="form" :rules="rules">
          <el-form-item label="地址">
            <el-input v-model="url" disabled />
          </el-form-item>
          <el-form-item label="消息" prop="message">
            <el-input v-model="form.message" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">发送消息</el-button>
          </el-form-item>
          <el-form-item label="返回信息汇总">
            {{ data }}
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VabPageHeader from '@/components/VabPageHeader'

  export default {
    name: 'WebSocket',
    components: {
      VabPageHeader,
    },
    data() {
      return {
        url: 'ws://123.207.136.134:9010/ajaxchattest',
        webSocket: null,
        data: [],
        status: '',
        form: { message: null },
        rules: {
          message: [{ required: true, message: '请输入消息', trigger: 'blur' }],
        },
      }
    },
    created() {
      this.init()
    },
    destroyed() {
      this.webSocket.close()
    },
    methods: {
      submit() {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.send(this.form.message)
          } else {
            return false
          }
        })
      },
      init() {
        const wsuri = this.url
        this.webSocket = new WebSocket(wsuri)
        this.webSocket.onmessage = this.onmessage
        this.webSocket.onopen = this.onopen
        this.webSocket.onerror = this.onerror
        this.webSocket.onclose = this.onclose
      },
      onopen() {
        this.status = '成功'
      },
      onerror() {
        this.status = '失败'
        this.init()
      },
      onmessage({ data }) {
        //截掉测试webSocket地址广告
        this.data.push(data.substring(0, data.length - 66))
      },
      send(Data) {
        this.webSocket.send(Data)
      },
      onclose(e) {
        this.status = '断开'
      },
    },
  }
</script>
