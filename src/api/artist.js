import request from "@/utils/request"

const list = [
  {
    title: '推荐',
    list: [
      {
        name: '推荐歌手',
        cat: 9999
      },
      {
        name: '入驻歌手',
        cat: 5001
      }
    ]
  },
  {
    title: '华语',
    list: [
      {
        name: '华语男歌手',
        cat: 1001
      },
      {
        name: '华语女歌手',
        cat: 1002
      },
      {
        name: '华语组合/乐队',
        cat: 1003
      }
    ]
  },
  {
    title: '欧美',
    list: [
      {
        name: '欧美男歌手',
        cat: 2001
      },
      {
        name: '欧美女歌手',
        cat: 2002
      },
      {
        name: '欧美组合/乐队',
        cat: 2003
      }
    ]
  },
  {
    title: '日本',
    list: [
      {
        name: '日本男歌手',
        cat: 6001
      },
      {
        name: '日本女歌手',
        cat: 6002
      },
      {
        name: '日本组合/乐队',
        cat: 6003
      }
    ]
  },
  {
    title: '韩国',
    list: [
      {
        name: '韩国男歌手',
        cat: 7001
      },
      {
        name: '韩国女歌手',
        cat: 7002
      },
      {
        name: '韩国组合/乐队',
        cat: 7003
      }
    ]
  },
  {
    title: '其他',
    list: [
      {
        name: '其他男歌手',
        cat: 4001
      },
      {
        name: '其他女歌手',
        cat: 4002
      },
      {
        name: '其他组合/乐队',
        cat: 4003
      }
    ]
  }
]


export function getList() {
  return list;  
}

/* 歌手分类列表 */
export function getArtistList(data) {
  return request({
    url: '/api/artist/list',
    withCredentials: true,
    params: {
      cat: data.cat,
      limit: data.limit ? data.limit : 20,
      offset: data.offset ? data.offset : 0,
      initial: data.initial ? data.initial : ''
    }
  })
}

/* 热门歌手 */
export function getTopArtists(data) {
  return request({
    url: '/api/top/artists',
    withCredentials: true,
    params: {
      limit: data.limit ? data.limit : 20,
      offset: data.offset ? data.offset : 0
    }
  })
}