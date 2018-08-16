<template>
	<div class="login-wrap">
		<el-form
		class="login-form"
		label-position="top"
		label-width="80px"
		:model="formData">
			<h2>用户登录</h2>
			<el-form-item label="用户名">
				<el-input v-model="formData.username"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input v-model="formData.password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button class="btn" type="primary" @click='handleLogin'>登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
// 导入axios模块
import axios from 'axios';
// 文本框绑定
export default {
	data () {
		return {
				formData: {
						username: '',
						password: ''
				}
		};
	},
	methods: {
		// 处理登录
		async handleLogin () {
			var response = await axios.post('http://localhost:8888/api/private/v1/login', this.formData);
			
			// var status = response.data.meta.status;
			// var msg = response.data.meta.msg;
			// 解构赋值
			var { data: { meta: { status, msg } } } = response;

			if (status === 200) {
				// 登陆成功
				// 提示
				this.$message.success(msg);
				// 记录 token
				// var { data: data: {token} } = response;  (---> 解构赋值)
				var token = response.data.data.token;
				sessionStorage.setItem('token',token);
				// 跳转到后台首页
				this.$router.push('/');
			} else {
				// 登录失败
				this.$message.error(msg);
			}


			// axios
			// 	.post('http://localhost:8888/api/private/v1/login', this.formData);
			// 	.then((response) => {
			// 		var status = response.data.meta.status;
			// 		var msg = response.data.meta.msg;
			// 		if (status === 200) {
			// 			// 登陆成功
			// 			// 提示
			// 			this.$message.success(msg);
			// 			// 记录 token
			// 			var token = response.data.data.token;
			// 			sessionStorage.setItem('token',token);
			// 			// 跳转到后台首页
			// 		} else {
			// 			// 登录失败
			// 			this.$message.error(msg);
			// 		}
			// 	});
			// 	.catch((err) => {
			// 		console.log(err);
			// 	})
		}
	}
}
</script>

<style>
    .login-wrap {
        background-color: #324152;
        height: 100%;
        display: flex;
        /* 水平居中 */
        justify-content: center;
        /* 垂直居中 */
        align-items: center;
    }
    .login-wrap .login-form {
        background-color: #fff;
        width: 400px;
        padding: 30px;
        border-radius: 5px;
    }
    .login-wrap .login-form .btn {
        width: 100%;
    }
</style>
