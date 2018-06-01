interface INewsItem {
    gid: string;
    title: string;
    url: string;
    author: string;
    contents: string;
    feedlabel: string;
    date: number;
    feedname: string;
    feed_type: number;
    app_id: number;
}

interface INewsItems extends Array<INewsItem> { };

interface IRecentNews {
    appid: number;
    appnews?: {
        appid: number;
        newsitems: INewsItems,
        count: number;
    }
}

interface IGame {
    appid: string;
    name: string;
    playtime_forever: number;
    img_icon_url: string;
    img_logo_url: string;
    has_community_visible_stats: boolean;
    details: {
        recentnews: IRecentNews;
        achievements: any;
    }
}

export interface ILibraryState {
    gameList: IGame[];
}

const LOAD_GAME_LIST = "LOAD_GAME_LIST";

export function loadGameList(steamid: string){
  return {
    type: LIST_ITEM_CLICK,
    index
  }
}

const initialState: ILibraryState = {

};

export default function reducer(state = initialState, action){
  switch (action.type){
  case INPUT_SUBMIT:
    return Object.assign(
      {},
      state,
      {
        list: [...state.list, {item: state.newToDo, done: false }],
        newToDo: ''
      }
    );
  case INPUT_CHANGED:
    return Object.assign(
      {},
      state,
      {newToDo: action.value}
    );
  case LIST_ITEM_CLICK:
    return Object.assign(
      {},
      state,
      {
        list: [
          ...state.list.slice(0, action.index),
          Object.assign({}, state.list[action.index], {done: !state.list[action.index].done}),
          ...state.list.slice(action.index+1)
        ]
      }
    );
  case DELETE_LIST_ITEM:
    return Object.assign(
      {},
      state,
      {
        list: [
          ...state.list.slice(0, action.index),
          ...state.list.slice(action.index+1)
        ]
      }
    );
  default:
    return state;
  }
}