import service from './index'

export default {
    //1. 获取首页数据(get)
    getHomeData() {
        return service.get('/recommend')
    },

    //2搜索(post)
    //参数: value: 搜索关键词
    postSearch({
        value
    }) {
        return service.post('/search', {
            value
        })
    },

    //3分类查询(get)
    //id:默认分类的id
    getClassification(id) {
        return service.get('/classification?mallSubId='+id)
    },

    //4. 查询获取购物车数据(post)
    postCard() {
        return service.post('/getCard', {})
    },

    //5. 购物车加减商品(post)
    posteditCart({
        count, // 购物车数量
        id, // 商品id
        mallPrice //价格
    }) {
        return service.post('/editCart', {
            count,
            id,
            mallPrice
        })
    },
    //6. 购物车商品删除(post)
    postdeleteShop({
        id //商品id
    }) {
        return service.post('/deleteShop', {
            id
        })
    },
    //7.购物车支付页面(post)
    postOrder({
        address, // 收货地址
        tel, // 电话
        orderId, // 所有商品的id(数组)
        totalPrice, // 总价格
        idDirect, // 用来判断是购物车结算还是直接购买(直接购买为true, 购物车结算为false)
        count // 商品数量
    }) {
        return service.post('/order', {
            address, // 收货地址
            tel, // 电话
            orderId, // 所有商品的id(数组)
            totalPrice, // 总价格
            idDirect, // 用来判断是购物车结算还是直接购买(直接购买为true, 购物车结算为false)
            count // 商品数量
        })
    },
    //8.单个商品详情(get)
    getGoods(id) {
        return service.get('/goods/one?id='+id)
    },
    //9. 收藏单个商品(post)
    postCollection(item) {
        return service.post('/collection', item)
    },
    //10. 取消收藏(post)
    postcancelCollection({
        id
    }) {
        return service.post('/cancelCollection', {
            id
        })
    },
    // 11.查询商品是否已收藏(post)
    postisCollection({
        id
    }) {
        return service.post('/isCollection', {
            id
        })
    },
    //12. 加入购物车(post)
    postaddShop({
        id
    }) {
        return service.post('/addShop', {
            id
        })
    },
    //13.退出登录(post)
    postloginOut() {
        return service.post('/loginOut', {})
    },
    //14. 获取用户信息(post)
    postqueryUser() {
        return service.post('/queryUser', {})
    },
    //15. 修改保存用户信息(post)
    postsaveUser({
        gender, // 性别
        year, // 年
        month, // 月
        day, // 日
        id, // 用户id
        nickname // 昵称
    }) {
        return service.post('/saveUser', {
            gender, // 性别
            year, // 年
            month, // 月
            day, // 日
            id, // 用户id
            nickname // 昵称
        })
    },
    //16. 商品评论(post)
    postgoodsOne({
        id, //商品cid
        rate, //分数
        content, // 内容
        anonymous, // 是否匿名
        _id, // 商品的_id
        order_id, // 商品的order_id
        image
    }) {
        return service.post('/goodsOne/comment', {
            id, //商品cid
            rate, //分数
            content, // 内容
            anonymous, // 是否匿名
            _id, // 商品的_id
            order_id, // 商品的order_id
            image
        })
    },
    //17. 获取登录注册默认验证码(get)
    getVerify() {
        return service.get('/verify')
    },
    //18. 查询用户收货地址(get)
    getAddress() {
        return service.get('/getAddress')
    },
    //19. 查询默认收货地址(get)
    getDefaultAddress() {
        return service.get('/getDefaultAddress')
    },
    //20. 设置默认收货地址(post)
    postsetDefaultAddress({
        id
    }) {
        return service.post('/setDefaultAddress', {
            id
        })
    },
    //21. 增加收货地址(post)
    postAddress({
        name, //用户名
        tel, //电话
        address, //(省+市+区+详情地址)
        isDefault, //是否默认
        province, //省
        city, //市
        county, //区
        addressDetail, //详情地址，
        areaCode, //地区代码
        id //修改地址时候要传id 
    }) {
        return service.post('/address', {
            name, //用户名
            tel, //电话
            address, //(省+市+区+详情地址)
            isDefault, //是否默认
            province, //省
            city, //市
            county, //区
            addressDetail, //详情地址，
            areaCode, //地区代码
            id //修改地址时候要传id 
        })
    },
    //22. 删除地址(post)
    postdeleteAddress({
        id
    }) {
        return service.post('/deleteAddress', {
            id
        })
    },
    //23. 注册(post)
    postregister({
        nickname, // 用户名
        password, // 密码
        verify, // 验证码
    }) {
        return service.post('/register', {
            nickname, // 用户名
            password, // 密码
            verify, // 验证码
        })
    },
    //24. 登录(post)
    postlogin({
        nickname, //用户名
        password, // 密码
        verify // 验证码
    }) {
        return service.post('/login', {
            nickname, //用户名
            password, // 密码
            verify // 验证码
        })
    },
    //25. 订单查询(get)
    getMyOrder() {
        return service.get('/getMyOrder')
    },
    //26. 查询已评价(get)
    getalreadyEvaluated() {
        return service.get('/alreadyEvaluated')
    },
    //27. 查询未评价(get)
    gettobeEvaluated() {
        return service.get('/tobeEvaluated')
    },
    //28. 查询单条评论(post)
    postevaluateOne({
        id,// 商品id
        _id// 数据库的那条id
    }){
        return service.post('/evaluateOne',{
            id,// 商品id
            _id// 数据库的那条id
        })
    }
}