import * as React from "react";

export interface IRecentNewsProps {
    appid: number;
}

export interface INewsItem {
    gid: string,
    title: string,
    url: string,
    author: string,
    contents: string,
    feedlabel: string,
    date: number,
    feedname: string,
    feed_type: number,
    app_id: number
}

interface INewsItems extends Array<INewsItem> { };

export interface IRecentNewsState {
    appid: number;
    appnews?: {
        appid: number;
        newsitems: INewsItems,
        count: number;
    }
}

class RecentNews extends React.Component<IRecentNewsProps, IRecentNewsState> {

    public static async getDerivedStateFromProps(props: IRecentNewsProps, state: IRecentNewsState) {
        return {
            appid: props.appid
        }
    }

    public state = {
        appid: 0,
        appnews: {
            appid: 0,
            newsitems: [],
            count: 0
        }
    }

    public componentDidUpdate(prevProps: any, prevState: any) {
        console.log(this.state, prevState);
        if (this.state.appid !== prevState.appid) {
            this.loadData();
        }
    }

    public render() {
        if (this.state.appnews) {
            const recentNewsItems = this.state.appnews.newsitems.map((item: INewsItem, i) => {
                return (
                    <div key={i} style={{ paddingBottom: "10px" }}>
                        <div>{item.title}</div>
                        <div style={{ color: "#999", fontSize: "12px" }}>{new Date(item.date).toDateString()} - {item.author}</div>
                        <div style={{ color: "#BBB", fontSize: "12px" }}>{item.contents}</div>
                        <a style={{ fontSize: "12px", textDecoration: "underline" }}>Read more</a>
                    </div>
                );
            });

            return (
                <div id="RecentNews">
                    <div style={{ textTransform: "uppercase", color: "#5993B0" }}>Recent News</div>
                    {recentNewsItems}
                </div>
            );
        }
        else {
            return (
                <div>
                    loading...
                </div>
            );
        }
    }

    private async loadData() {
        const res = await fetch(`http://localhost:8080/steamNews/${this.state.appid}`);
        const json = await res.json();
        this.setState(Object.assign({}, this.state, json));
    }
}

export default RecentNews;
