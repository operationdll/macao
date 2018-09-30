/**
 * 中英文翻译
 */import * as types from '../mutation-types'

const state = {
	tabLanShow:false,
	tabLanShow2:false,
 	language:{},
	en: {
		menu:{
			find:'Find a Property',
			language:'Language',
			help:'Help',
			aboutus:'About Us',
			emSign:'Staff Portal',
			title:'MORE',
            update:'Version'
		},
		promotion:{
			title:'Promotion',
            more:'More',
			porpertyProper:'Promotion by Properties',
			porpertyNews:'Property News',
			grounpNews:'Promotions by Group',
			grounpAc:'Group News'
		},
		raiders:{
			title:'Local Interest',
			more:'more'
		},
		community:{
			title:'Activities',
			propertyActivity:'Activities',
			opinionSurvey:'Notice',
			shopping:'Shopping',
			ascottLife:'Ascott Living',
			feedback:'Feedback',
			ssr:'News',
            more:'more',
			buy:'BUY',
			submit:'SUBMIT',
			signUp:'SIGN UP',
			life:'Life style',
            how:'Transportation',
			apply:'Apply Time',
			start:'Start Time',
            sign:'Sign Up',
            chanel:'Channel',
            save:'Save'
		},
		func:{
			translate:'Translate',
			tel:'Phone'
		},
		home:{
			findResidence:'Searching for Property',
            search:'Search',
			profile:'Property',
			virtual:'Panoramic',
			apartment:'Rooms',
			fire:'Fire Exit',
            how:'Transportation'
		},
		myCenter:{
			room_info:'Room Info',
			message:'Message',
			notice:'Collection',
			log_out:'Logout',
			changePwd:'Change password',
			oaId:'OA ID',
			gsm:'Staff system',
			bill:'Billing',
			invoices:'Invoices',
			invoices_header:'Issue Invoice',
			invoices_manage:'Manage Invoice',
			order:'Order',
			viewOrder:'Check Order'
		},
		common:{
            screen:'Screen',
            more:'more',
			loginTxt:'Are you sure you want to quit the system?',
			cancel:'Cancel',
			sure:'Sure',
			noMoreData:'No more data~'
		},
        msg:{
            empty_username:'Please enter one user name!',
            empty_pwd:'Please enter password!',
            empty_one:'The input information is incomplete!',
            info_err:'ERROR Incorrect username or password!',
			empty_name:'Please enter your name!',
			empty_phone:'Please enter your phone number!',
			empty_num_par:'Please enter number of participants!',
			empty_num_buy:'Please enter quantity purchased!',
			login_err:'Login information is incorrect',
			buy_info:'Your order has been successfully submitted, will contact you soon',
			lifeMsg:'The following services are provided by third parties and only support Chinese language. The relevant services and responsibilities will be borne by the third parties. If you have any questions, please contact the customer service of the company.',
			createInvoice:'Invoice: This feature applies to "VAT invoice", please ask our front desk for more information',
			manageInvoice:'Invoice Management: This feature is to view all invoicing records',
			buy_confirm:"Are you sure you want to buy this item?"
        },
		login:{
			sign:'Sign In',
			residence:'Find Your Residence',
			room:'Room No.',
			name:'Last Name',
			login:'Guest sign in',
			empAccount:'Employee Account',
			password:'Password',
			isAd:'is Ad?',
			aLogin:'Employee sign in'
		},
		foot:{
			hotel:'Introduction',
			promotion:'Promotion',
			surrounding:'Local Interest',
			community:'Community'
		},
		submitForm:{
			name:'Name',
			tel:'Tel',
			number:'Number',
			bz:'Remarks...',
			subBtn:'Submit',
			alertTxt:'Successful enrollment!',
			alertTxt2:'Booking success！'
		},
        apartment:{
            book:'Reservation',
            maxPerson:'Max',
            person:'person',
            fcount:'Bedrooms',
            size:'Apartment Size',
            photo:'View',
			title:'Room Type'
        },
		order:{
			title:'My Order',
			user:'Guest',
			roomid:'Room ID',
			time:'Time',
            orderid:'ID'
		},
        lifeStyle:{
            food:'Food & Drink',
            movie:'Moive & TV Drama',
            phone:'Phone & Sim Card',
            express:'Expressage',
            trip:'Trip',
			title:'Life Style'
        },
		news:{
			title:'NEWS'
		},
        judge:{
            title:'Judge',
			txt:'Write down your comments',
            close:'Cancel',
            save:'Save',
			success:'Success',
			error:'Submission failure'
        },
		map:{
			title:'Location'
		}
	},
	jp:{
		menu:{
			find:'プロパティを検索',
			language:'言語',
			help:'ヘルプ',
			aboutus:'私たちについて',
			emSign:'スタッフのログイン',
			title:'セット',
            update:'バージョンチェック'
		},
		promotion:{
			title:'プロモーション',
            more:'もっと',
			porpertyProper:'プロモーション',
			porpertyNews:'プロパティニュース',
			grounpNews:'グループプロモーション',
			grounpAc:'グループニュース'
		},
		raiders:{
			title:'ローカルレイダース',
            more:'もっと'
		},
        community:{
            title:'コミュニティ生活',
            propertyActivity:'活動',
            opinionSurvey:'通知',
            shopping:'ショッピング',
            ascottLife:'生活',
            feedback:'フィードバック',
	        ssr:'ニュース',
            more:'もっと',
			buy:'購入',
            submit:'提出する',
            signUp:'サインアップ',
	        life:'サービス',
            apply:'開始時間',
            start:'終了時刻',
			sign:'サインアップ',
			chanel:'チャネル',
			save:'保存する'
        },
		func:{
			translate:'翻訳',
            tel:'電話番号'
		},
		home:{
			findResidence:'プロパティの問い合わせ',
			search:'検索',
			profile:'はじめに',
			virtual:'パノラマ',
			apartment:'ルームタイプ',
			fire:'火事',
            how:'交通情報'
		},
		myCenter:{
			room_info:'部屋番号',
			message:'ニュース',
			notice:'コレクション',
			log_out:'出口',
			oaId:'従業員ID',
			gsm:'従業員制度',
			bill:'法案',
            invoices:'請求書管理',
			order:'注文'
		},
        common:{
            screen:'スクリーニング',
			more:'もっと',
	        loginTxt:'終了して終了します?',
	        cancel:'キャンセル',
	        sure:'OK',
            noMoreData:'データはこれ以上ありません~'

        },
		msg:{
			empty_username:'ユーザー名を入力してください',
			empty_pwd:'パスワードを入力してください',
			empty_one:'入力が不完全です',
			info_err:'アカウントまたはパスワードが間違っています',
            empty_name:'あなたの名前を入力してください!',
            empty_phone:'電話番号を入力してください!',
            empty_num_par:'参加者数を入力してください!',
            empty_num_buy:'品買いにかうステまステK補う!',
            login_err:'ログイン情報が間違っています',
            buy_info:'あなたが提出した注文は成功し、できるだけ早くご連絡いたします',
			lifeMsg:'以下のサービスは第三者によって提供され、中国語のサポートのみを提供します。関連するサービスおよび責任は、第三者によって負担されます。ご不明な点がございましたら、カスタマーサービスにお問い合わせください'
		},
		login:{
			sign:'ログイン',
			residence:'プロパティを選択',
			room:'部屋番号',
			name:'姓（英語）',
			login:'顧客のログイン',
			empAccount:'従業員アカウント',
			password:'パスワード',
			isAd:'それは広告アカウントですか?',
			aLogin:'スタッフのログイン'
		},
		foot:{
			hotel:'アパートメント紹介',
			promotion:'プロモーションオファー',
			surrounding:'ローカルレイダース',
			community:'コミュニティ生活'
		},
		submitForm:{
			name:'名前',
			tel:'電話番号',
			number:'人数',
			bz:'備考',
			subBtn:'提出する',
			alertTxt:'登録成功!',
			alertTxt2:'ご予約の成功！'
		},
		apartment:{
			book:'予約',
			maxPerson:'最大収容人数',
			person:'人々',
			fcount:'部屋数',
			size:'部屋の大きさ',
			photo:'パノラマ',
            title:'ルーム紹介'
		},
        order:{
            title:'私の注文',
            user:'顧客',
            roomid:'部屋番号',
            time:'時間',
            orderid:'注文番号'
        },
		lifeStyle:{
			food:'ケータリング',
			movie:'ビデオ',
			phone:'ビル＆フロー',
			express:'エクスプレス',
			trip:'旅行',
			title:'ライフサービス'
		},
        news:{
            title:'ニュース'
        },
        judge:{
            title:'コメント',
            txt:'コメントを書く',
			close:'キャンセル',
			save:'保存する',
            success:'提出済み',
            error:'送信に失敗しました'
        },
		map:{
			title:'場所'
		}
	},
	zh:{
		menu:{
			find:'查找物业',
			language:'语言',
			help:'帮助',
			aboutus:'关于我们',
			emSign:'员工登录',
			title:'设置',
            update:'版本检查'
		},
		promotion:{
			title:'促销优惠',
            more:'更多',
			porpertyProper:'物业促销',
			porpertyNews:'物业新闻',
			grounpNews:'集团促销',
			grounpAc:'集团新闻'
		},
		raiders:{
			title:'本地攻略',
            more:'更多'
		},
        community:{
            title:'社区生活',
            propertyActivity:'物业活动',
            opinionSurvey:'物业通知',
            shopping:'体验购物',
            ascottLife:'雅诗阁生活',
            feedback:'意见反馈',
	        ssr:'新闻',
            more:'更多',
			buy:'购买',
            submit:'提交',
            signUp:'报名',
	        life:'生活服务',
            apply:'开始时间',
            start:'结束时间',
			sign:'报名',
			chanel:'频道',
			save:'保存'
        },
		func:{
			translate:'翻译',
            tel:'电话'
		},
		home:{
			findResidence:'物业查询',
			search:'搜索',
			profile:'物业介绍',
			virtual:'全景',
			apartment:'房型列表',
			fire:'楼层消防',
            how:'交通信息'
		},
		myCenter:{
			room_info:'房间号',
			message:'消息',
			notice:'收藏',
			log_out:'退出',
			changePwd:'修改密码',
			oaId:'员工ID',
			gsm:'员工系统',
			bill:'账单',
			invoices:'发票',
			invoices_header:'开具发票',
			invoices_manage:'票据管理',
			order:'订单',
			viewOrder:'查看订单'
		},
        common:{
            screen:'筛选',
			more:'更多',
	        loginTxt:'确定退出?',
	        cancel:'取消',
	        sure:'确定',
            noMoreData:'没有更多数据了~'

        },
		msg:{
			empty_username:'请输入用户名',
			empty_pwd:'请输入密码',
			empty_one:'输入信息不完整',
			info_err:'账号或密码错误',
            empty_name:'请输入姓名!',
            empty_phone:'请输入手机号!',
            empty_num_par:'请输入参与人数!',
            empty_num_buy:'请输入购买数量!',
            login_err:'登录信息错误',
            buy_info:'您提交的订单已成功，我们会尽快联系您',
			lifeMsg:'以下服务由第三方提供并只提供中文支持。相关服务和责任将由该第三方承担。如有问题请咨询该公司客服',
			createInvoice:'开具发票：此功能适用于【增值税专用发票】，具体金额及发票拆分请与前台联系',
			manageInvoice:'票据管理：此功能适用于查看所有开具发票记录',
			buy_confirm:'确定购买吗？'
		},
		login:{
			sign:'登录',
			residence:'选择物业',
			room:'房间号',
			name:'姓(英文)',
			login:'客户登录',
			empAccount:'员工账号',
			password:'密码',
			isAd:'是否为 Ad 账户?',
			aLogin:'员工登录'
		},
		foot:{
			hotel:'公寓介绍',
			promotion:'促销优惠',
			surrounding:'本地攻略',
			community:'社区生活'
		},
		submitForm:{
			name:'姓名',
			tel:'电话',
			number:'人数',
			bz:'备注',
			subBtn:'提交',
			alertTxt:'报名成功！',
			alertTxt2:'预约成功！'
		},
		apartment:{
			book:'预定',
			maxPerson:'最大入住',
			person:'人',
			fcount:'房间数',
			size:'房间面积',
			photo:'全景',
            title:'房型介绍'
		},
        order:{
            title:'我的订单',
            user:'客户',
            roomid:'房间号',
            time:'时间',
            orderid:'订单号'
        },
		lifeStyle:{
			food:'餐饮外卖',
			movie:'视频',
			phone:'话费&流量',
			express:'快递',
			trip:'出行',
			title:'生活服务'
		},
        news:{
            title:'消息'
        },
        judge:{
            title:'评论',
            txt:'写下您的评论',
			close:'取消',
			save:'保存',
            success:'提交成功',
            error:'提交失败'
        },
		map:{
			title:'位置'
		}
	}
}
const actions = {
	updateLanguage: function ({commit},key) {
		commit(types.LANGUAGE,key)
	},
	firstLanguage:function ({commit}) {
		commit(types.FIRSTLANGUAGE)
	},
	changeLanguage:function ({commit}) {
		commit(types.TABLANGUAGE)
	},
    changeLanguage2:function ({commit}) {
        commit(types.TABLANGUAGE2)
    },
}
const mutations = {
	//切换语言，切换本地缓存
	[types.LANGUAGE] (state,key) {
		if(key == 'en'){
			state.language = state.en; 
		}else{ 
			if(key =='zh'){
				state.language = state.zh; 
			}else{
				state.language = state.jp; 
			}	
		}
	},
	[types.FIRSTLANGUAGE] (state) {
		if(localStorage.LANGUAGE == undefined){
			state.language = state.en;
			localStorage.LANGUAGE = 'en';
		}else{  
			if(localStorage.LANGUAGE == 'en'){
				state.language = state.en;
			}else if(localStorage.LANGUAGE == "jp"){
				state.language = state.jp;
			}else{
				state.language = state.zh;
			}
		}

	},
	//切换语言，弹出actionSheet
	[types.TABLANGUAGE] (state) {
		if(state.tabLanShow){
			state.tabLanShow = false;
		}else{
			state.tabLanShow = true;
		}
	},
    //切换语言，弹出actionSheet
    [types.TABLANGUAGE2] (state) {
        if(state.tabLanShow2){
            state.tabLanShow2 = false;
        }else{
            state.tabLanShow2= true;
        }
    },
}
const getters = {
	// language: state => state.language,
	tabLanShow: state => state.tabLanShow,
	tabLanShow2: state => state.tabLanShow2,
}

export default {
	state,
	actions,
	mutations,
	getters
}