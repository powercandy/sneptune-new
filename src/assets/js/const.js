const  hotList = [
  {
    "title": "About",
    "slug": "about",
    "view": 61
  },
  {
    "title": "Links",
    "slug": "links",
    "view": 33
  },
  {
    "title": "浅谈 js 变量作用域",
    "slug": "js-variables",
    "view": 0
  },
  {
    "title": "DVI 接口的类别区分",
    "slug": "dvi",
    "view": 0
  },
  {
    "title": "一个漏洞的发现过程",
    "slug": "ly-bug",
    "view": 0
  },
  {
    "title": "PHP 程序设计之工厂模式的实现 ",
    "slug": "factory-html",
    "view": 0
  },
  {
    "title": "PHP 程序设计之观察者模式的实现",
    "slug": "observer",
    "view": 0
  },
  {
    "title": "php 闭包与匿名函数",
    "slug": "closure",
    "view": 0
  },
  {
    "title": "javascript",
    "slug": "java",
    "view": 0
  }
]
const archives = [
  {
    "id": 11,
    "title": "javascript",
    "user_id": 1,
    "slug": "java",
    "thumb": null,
    "category_id": 1,
    "status": 99,
    "type": "post",
    "description": "",
    "create_time": 1537437582,
    "modify_time": 1537437582,
    "view": 0,
    "category": {
      "id": 1,
      "name": "tech",
      "slug": "tech",
      "description": "",
      "count": 6
    },
    "tag": [
      {
        "id": 14,
        "name": "webapp",
        "slug": "webapp",
        "description": "",
        "count": 0,
        "content_id": 11
      },
      {
        "id": 17,
        "name": "javascript",
        "slug": "javascript",
        "description": "",
        "count": 1,
        "content_id": 11
      }
    ],
    "comment": [],
    "user": {
      "id": 1,
      "username": "admin",
      "email": "17600112740@163.com",
      "qq": "871956478",
      "github": "powercandy",
      "weibo": null,
      "zhihu": null
    }
  },
  {
    "id": 10,
    "title": "Links",
    "user_id": 1,
    "slug": "links",
    "thumb": null,
    "category_id": 0,
    "status": 99,
    "type": "page",
    "description": "",
    "create_time": 1521298347,
    "modify_time": 0,
    "view": 33,
    "tag": [],
    "comment": [],
    "user": {
      "id": 1,
      "username": "admin",
      "email": "17600112740@163.com",
      "qq": "871956478",
      "github": "powercandy",
      "weibo": null,
      "zhihu": null
    }
  },
  {
    "id": 9,
    "title": "About",
    "user_id": 1,
    "slug": "about",
    "thumb": null,
    "category_id": 0,
    "status": 99,
    "type": "page",
    "description": "",
    "create_time": 1521298248,
    "modify_time": 0,
    "view": 61,
    "tag": [],
    "comment": [],
    "user": {
      "id": 1,
      "username": "admin",
      "email": "17600112740@163.com",
      "qq": "871956478",
      "github": "powercandy",
      "weibo": null,
      "zhihu": null
    }
  },
  {
    "id": 8,
    "title": "php 闭包与匿名函数",
    "user_id": 1,
    "slug": "closure",
    "thumb": "",
    "category_id": 1,
    "status": 99,
    "type": "post",
    "description": "<p>提到闭包和匿名函数似乎一下子就想到了 javascript ，但其实在很多语言中都有闭包的特性。但是 javascript 坑爹的变量作用域让闭包变得非常重要。而其他语言完善私有共有变量和继承让闭包似乎没有什么卵用。但是为了有点B格，还是看了看 php 的闭包。<br />\n闭包和匿名函数</p>\n",
    "create_time": 1467820800,
    "modify_time": 1521712748,
    "view": 0,
    "category": {
      "id": 1,
      "name": "tech",
      "slug": "tech",
      "description": "",
      "count": 6
    },
    "tag": [],
    "comment": [],
    "user": {
      "id": 1,
      "username": "admin",
      "email": "17600112740@163.com",
      "qq": "871956478",
      "github": "powercandy",
      "weibo": null,
      "zhihu": null
    }
  },
  {
    "id": 6,
    "title": "PHP 程序设计之观察者模式的实现",
    "user_id": 1,
    "slug": "observer",
    "thumb": null,
    "category_id": 1,
    "status": 99,
    "type": "post",
    "description": "<p>什么是观察者模式？</p>\n<p>一个对象通过添加一个方法（该方法允许另一个对象，即观察者 注册自己）使本身变得可观察。当可观察的对象更改时，它会将消息发送到已注册的观察者。这些 观察者使用该信息执行的操作与可观察的对象无关。结果是对象可以相互对话，而不必了解原因。观察者模式是一种事件系统，意味着这一模式允许某个类观察另一 个类的状态，当被观察的类状态发生改变的时候，观察类可以收到通知并且做出相应的动作;观察者模式为您提供了避免组件之间紧密耦。</p>\n",
    "create_time": 1466524800,
    "modify_time": 1521712727,
    "view": 0,
    "category": {
      "id": 1,
      "name": "tech",
      "slug": "tech",
      "description": "",
      "count": 6
    },
    "tag": [],
    "comment": [],
    "user": {
      "id": 1,
      "username": "admin",
      "email": "17600112740@163.com",
      "qq": "871956478",
      "github": "powercandy",
      "weibo": null,
      "zhihu": null
    }
  },
  {
    "id": 5,
    "title": "PHP 程序设计之工厂模式的实现 ",
    "user_id": 1,
    "slug": "factory-html",
    "thumb": null,
    "category_id": 2,
    "status": 99,
    "type": "post",
    "description": "<p>什么是工厂模式？</p>\n<p>由工厂类根据参数来决定创建出哪一种产品类的实例；</p>\n<p>工厂类是指包含了一个专门用来创建其他对象的方法的类。 所谓按需分配，传入参数进行选择，返回具体的类。 工厂模式的最主要作用就是对象创建的封装、简化创建对象操作。</p>\n<p>简单的说，就是调用工厂类的一个方法（传入参数）来得到需要的类；</p>\n",
    "create_time": 1466352000,
    "modify_time": 1521712719,
    "view": 0,
    "category": {
      "id": 2,
      "name": "life",
      "slug": "life",
      "description": "",
      "count": 0
    },
    "tag": [],
    "comment": [],
    "user": {
      "id": 1,
      "username": "admin",
      "email": "17600112740@163.com",
      "qq": "871956478",
      "github": "powercandy",
      "weibo": null,
      "zhihu": null
    }
  },
  {
    "id": 4,
    "title": "一个漏洞的发现过程",
    "user_id": 1,
    "slug": "ly-bug",
    "thumb": null,
    "category_id": 1,
    "status": 99,
    "type": "post",
    "description": "<p>无意间发现的一个漏洞。本想提交乌云，结果一看活动时间，今天晚上就要结束了，遂作罢。整个过程都抱着学习的态度记录了一下，整理成文，以记之。</p>\n",
    "create_time": 1465660800,
    "modify_time": 1521712711,
    "view": 0,
    "category": {
      "id": 1,
      "name": "tech",
      "slug": "tech",
      "description": "",
      "count": 6
    },
    "tag": [
      {
        "id": 15,
        "name": "bug",
        "slug": "bug",
        "description": "",
        "count": 0,
        "content_id": 4
      }
    ],
    "comment": [],
    "user": {
      "id": 1,
      "username": "admin",
      "email": "17600112740@163.com",
      "qq": "871956478",
      "github": "powercandy",
      "weibo": null,
      "zhihu": null
    }
  },
  {
    "id": 3,
    "title": "DVI 接口的类别区分",
    "user_id": 1,
    "slug": "dvi",
    "thumb": null,
    "category_id": 1,
    "status": 99,
    "type": "post",
    "description": "<p>这台电脑的时候其实是准备写代码来的，所以没有装显卡。然而代码没写多少又想打游戏了 ，于是去卡吧收了个二手显卡，于是开始了“装卡之旅”。</p>\n",
    "create_time": 1465315200,
    "modify_time": 1521712701,
    "view": 0,
    "category": {
      "id": 1,
      "name": "tech",
      "slug": "tech",
      "description": "",
      "count": 6
    },
    "tag": [
      {
        "id": 18,
        "name": "it",
        "slug": "it",
        "description": "",
        "count": 0,
        "content_id": 3
      }
    ],
    "comment": [],
    "user": {
      "id": 1,
      "username": "admin",
      "email": "17600112740@163.com",
      "qq": "871956478",
      "github": "powercandy",
      "weibo": null,
      "zhihu": null
    }
  },
  {
    "id": 1,
    "title": "浅谈 js 变量作用域",
    "user_id": 1,
    "slug": "js-variables",
    "thumb": null,
    "category_id": 1,
    "status": 99,
    "type": "post",
    "description": "<p>关于 javascript 这门语言许多人都是从开始的时候觉得容易，后来觉得难，再后来又觉得容易的过程走过来的。最开始的时候觉得简单，是因为没有重视，没有把它当作一门语言来来认真对待，总是以自己学习其他语言的“经验”来使用它。在使用中会遇到各种问题，比如 javascript特有的变量作用域和异步问题，这时候会觉得它其实也很难。但是如果真正理解了变量作用域和异步，其实也不是很难。只是写法的区别。</p>\n",
    "create_time": 1463760000,
    "modify_time": 1521712656,
    "view": 0,
    "category": {
      "id": 1,
      "name": "tech",
      "slug": "tech",
      "description": "",
      "count": 6
    },
    "tag": [
      {
        "id": 17,
        "name": "javascript",
        "slug": "javascript",
        "description": "",
        "count": 1,
        "content_id": 1
      }
    ],
    "comment": [],
    "user": {
      "id": 1,
      "username": "admin",
      "email": "17600112740@163.com",
      "qq": "871956478",
      "github": "powercandy",
      "weibo": null,
      "zhihu": null
    }
  }
]
export {
  hotList,
  archives
}