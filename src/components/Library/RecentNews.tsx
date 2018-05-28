import * as React from "react";

export interface IRecentNewsProps {
    appid: number;
}

export interface IRecentNewsState {
    appnews: {
        appid: number;
        newsitems: [{
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
        }]
        count: number;
    }
}

class RecentNews extends React.Component<IRecentNewsProps, IRecentNewsState> {

    public getInitialState() {
        return {
            appid: 0,
            newsitems: []
        }
    }

    public async componentDidUpdate() {
        const res = await fetch(`http://localhost:8080/steamNews/${this.props.appid}`);
        const json = await res.json();
        this.setState(json);
    }

    public render() {
        if (this.state) {
            const recentNewsItems = this.state.appnews.newsitems.map((item, i) => {
                return (
                    <div key={i} style={{paddingBottom: "10px"}}>
                        <div>{item.title}</div>
                        <div style={{color: "#999", fontSize: "12px"}}>{new Date(item.date).toDateString()} - {item.author}</div>
                        <div style={{color: "#BBB", fontSize: "12px"}}>{item.contents}</div>
                        <div>Read more</div>
                    </div>
                );
            });

            return (
                <div id="RecentNews">
                    <div style={{color: "#5993B0"}}>Recent News</div>
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
}

export default RecentNews;
