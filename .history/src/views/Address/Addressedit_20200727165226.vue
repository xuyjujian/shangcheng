<template>
  <div>
    <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">编辑地址</div>
    </div>
    <div>
      <van-address-edit
        :area-list="areaList"
        show-delete
        show-set-default
        show-search-result
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
      />
    </div>
  </div>
</template>
<script>
import areaList from '../../../addicess/area'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      areaList,
       searchResult: [],
       
    };
  },
  methods: {
    icon() {
      this.$router.go(-1);
    },
    onSave(content) {
      this.$api.postAddress({
        name:content.name, //用户名
        tel:content.tel, //电话
        address:content.province+content.city + content.county+content.addressDetail, //(省+市+区+详情地址)
        isDefault:content.isDefault, //是否默认
        province:content.province, //省
        city:content.city, //市
        county:content.county, //区
        addressDetail:content.addressDetail, //详情地址，
        areaCode:content.areaCode, //地区代码
    }).then(res=>{
      console.log(res)
    })
    this.$router.push('/addresslist')
      console.log(content)
    },
    onDelete() {
      this.$toast("delete");
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.icon {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>