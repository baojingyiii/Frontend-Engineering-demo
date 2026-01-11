<!--5.表单绑定: v-model-->
<!--步骤：（1）定义变量：const formData=reactive({})（2）表单项中使用v-model=""进行绑定-->
<script setup>

import {reactive} from "vue";

//表单项和变量使用v-model指令进行绑定：双向绑定
//响应式：单向数据流 ：变量 ==》页面
//v-model 双向绑定 ： 变量《==》页面

const formData=reactive({
  username:"张三",
  agree:true,   //虽然reactive不能包装基本类型，但是对象属性可以是基本类型（也就是实际上包装的是agree，而不是true）
  hobby:["足球"],
  sex:"",
  xueli:"初中",
  course:[]
})
</script>

<template>
  <div id="app">
    <h1>App</h1>

    <div class="main-container">
      <!-- 左侧：表单绑定区域 -->
      <div class="form-container">
        <h2>表单绑定</h2>
        <!-- 姓名(文本) -->
        <div class="form-group">
          <label>姓名(文本)：</label>
          <input type="text" placeholder="请输入姓名" v-model="formData.username">
        </div>

        <!-- 同意协议(checkbox) -->
        <div class="form-group">
          <label>
            <input type="checkbox" v-model="formData.agree" />
            同意协议(checkbox)：
          </label>
        </div>

        <!-- 兴趣(多选框) -->
        <div class="form-group">
          <label>兴趣(多选框)：</label>
          <div class="checkbox-group">
            <label>
              <input type="checkbox" value="足球" v-model="formData.hobby">
              足球
            </label>
            <label>
              <input type="checkbox" value="篮球" v-model="formData.hobby">
              篮球
            </label>
            <label>
              <input type="checkbox" value="羽毛球" v-model="formData.hobby">
              羽毛球
            </label>
            <label>
              <input type="checkbox" value="乒乓球" v-model="formData.hobby">
              乒乓球
            </label>
          </div>
        </div>

        <!-- 性别(单选框) -->
        <div class="form-group">
          <label>性别(单选框)：</label>
          <div class="radio-group">
            <label>
              <input type="radio" name="gender" value="男" v-model="formData.sex">
              男
            </label>
            <label>
              <input type="radio" name="gender" value="女" v-model="formData.sex">
              女
            </label>
          </div>
        </div>

        <!-- 学历(单选下拉列表) -->
        <div class="form-group">
          <label>学历(单选下拉列表)：</label>
          <select v-model="formData.xueli">
            <option>初中</option>
            <option>高中</option>
            <option>大学</option>
            <option>硕士</option>
            <option>博士</option>
          </select>
        </div>

        <!-- 课程(多选下拉列表) -->
        <div class="form-group">
          <label>课程(多选下拉列表)：</label>
          <div class="hint">（按住 Ctrl 可多选）</div>
          <select multiple v-model="formData.course">
            <option value="" disabled>选择课程</option>
            <option>语文</option>
            <option>数学</option>
            <option>英语</option>
          </select>
        </div>
      </div>
      <!-- 这里需要关闭 .form-container -->

      <!-- 右侧：结果预览区域 -->
      <div class="preview-container">
        <h2>结果预览</h2>
        <div class="preview-item">
          <strong>姓名：{{formData.username}}</strong>
        </div>
        <div class="preview-item">
          <strong>同意协议：{{formData.agree}}</strong>
        </div>
        <div class="preview-item">
          <label>兴趣：
            <span v-for="h in formData.hobby">{{h}},</span>
          </label>
        </div>
        <div class="preview-item">
          <strong>性别：{{formData.sex}}</strong>
        </div>
        <div class="preview-item">
          <strong>学历：{{formData.xueli}}</strong>
        </div>
        <div class="preview-item">
          <strong>课程：<span v-for="c in formData.course">{{c}},</span></strong>
        </div>
      </div>
    </div>
    <!-- 这里关闭 .main-container -->
  </div>
</template>

<style scoped>
#app {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1, h2 {
  color: #333;
  margin-bottom: 20px;
}

/* 左右布局容器 */
.main-container {
  display: flex;
  gap: 40px;


}

/* 左侧表单区域 */
.form-container {
  flex: 1;
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* 右侧预览区域 */
.preview-container {
  flex: 1;
  background: #e8f4ff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* 表单样式 */
.form-group {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #555;
}

.form-group input[type="text"],
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}

.form-group input[type="checkbox"],
.form-group input[type="radio"] {
  margin-right: 8px;
}

/* 复选框和单选框组 */
.checkbox-group,
.radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 5px;
}

.checkbox-group label,
.radio-group label {
  display: flex;
  align-items: center;
  font-weight: normal;
  cursor: pointer;
}

/* 多选下拉列表提示 */
.hint {
  font-size: 12px;
  color: #666;
  margin: 5px 0 10px;
}

.form-group select[multiple] {
  height: 120px;
  padding: 10px;
}

/* 预览项目样式 */
.preview-item {
  margin-bottom: 25px;
  padding: 12px;
  background: white;
  border-radius: 6px;
  border-left: 4px solid #c3e6df;
}

.preview-item strong {
  color: #333;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
    gap: 20px;
  }
}
</style>