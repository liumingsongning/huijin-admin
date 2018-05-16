<template>
<Card>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="商品名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入商品名"></Input>
        </FormItem>

        <FormItem label="价格" prop="price">
            <Input v-model="formValidate.price" placeholder="请输入商品价格"></Input>
        </FormItem>

        <FormItem label="上传图片" prop="img">
          
         
            <Card>
                <upload 
                    :uptoken='uptoken'
                    :filename='filename'
                    browse_button='pickfiles'
                    domain='http://p8htjuaac.bkt.clouddn.com'
                    bucket_name='huijin'
                    :showpause='false'
                    :showcontinue='false'
                    @on-percente="filePercent"
                    @on-change="UploadComplete">
                    <Button type="ghost" id="pickfiles" slot='button'>选择文件</Button>
                    <Progress :percent="percent" slot='progressBar' v-show='percent'></Progress>
                </upload>
                 
            </Card>
         
        </FormItem>
       
           
      
      
        <FormItem label="是否上架" prop="putaway">
            <RadioGroup v-model="formValidate.putaway">
              <Radio label="male">是</Radio>
              <Radio label="female">否</Radio>
            </RadioGroup>
        </FormItem>

        <FormItem label="商品简介" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入商品价格..."></Input>
        </FormItem>

        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
  </Card>
</template>
<script>
import Upload from "qiniu-upload-vue";
    export default {
        components: {
            Upload,
        },
        data () {
            return {
                uptoken:'',
                percent:0,
                filename:'',
                formValidate: {
                    name: '',
                    price: '',
                    city: '',
                    putaway:'male',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '请输入商品名', trigger: 'blur' }
                    ],
                    price: [
                        { required: true, message: '请输入价格', trigger: 'blur' },
                    ],
      
                    putaway: [
                        { required: true, message: '请选择是否上架', trigger: 'change' }
                    ],

                    img: [
                        { required: true, message: '请上传图片', trigger: 'change' }
                    ],
                 
                  
                    desc: [
                        { required: true, message: '请输入简介', trigger: 'blur' },
                        { type: 'string', min: 20, message: '简介不能超过20字', trigger: 'blur' }
                    ]
                }
            }
        },
        mounted() {
            let _this = this;
            this.ajax
            .get("/test")
            .then(function(response) {
                console.log(response.data.token)
                _this.uptoken = response.data.token;
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            UploadComplete(val){
                console.log(val);
            },
            filePercent(val){
                var _this=this;
                this.percent=val;
                if(val==100){
                    setTimeout(function () {
                        _this.percent=0;
                    }, 1000);
                }
            }
        }
    }
</script>

