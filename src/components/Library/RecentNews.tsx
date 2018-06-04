import * as React from "react";

// interface IRecentNewsProps {

// }

class RecentNews extends React.Component<any, any> {

    public render() {

        if (!this.props.data) {
            return null;
        }

        console.log(this.props.data);

        const recentNewsItems = this.props.data.newsitems.map((item: any, i: any) => {
            return (
                <div key={i} style={{ paddingBottom: "10px" }}>
                    <div>{item.title}</div>
                    <div style={{ color: "#999", fontSize: "12px" }}>{new Date(item.date).toDateString()} - {item.author}</div>
                    {/* dont do this */}
                    <div style={{ color: "#BBB", fontSize: "12px" }} dangerouslySetInnerHTML={{ __html: item.contents }}></div>
                    <a style={{ fontSize: "12px", textDecoration: "underline" }}>Read more</a>
                </div>
            );
        });

        return (
            <div id="RecentNews">
                <div style={{ textTransform: "uppercase", color: "#5993B0", paddingBottom: "10px" }}>Recent News</div>
                {this.props.data.newsitems.length > 0 ? recentNewsItems : <div>There is no news</div>}
            </div>
        );
    }


}

export default RecentNews;
