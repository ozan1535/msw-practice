import { Body, makeStyles } from '@fluentui/react-components';
import { Card, CardHeader, CardFooter } from "@fluentui/react-card"


const useStyles = makeStyles({
    root: {
        maxWidth: "300px",
        height: "350px",
        "margin-left": "10px",
        "margin-right": "10px",
        "margin-bottom": "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        "border-radius": "25px",
        backgroundColor: "#387C63",
        color: "#fff",
    },
    header: {
        width: "100%",
        height: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "border-bottom": "1px solid #fff",
        textAlign: "center",
    },
    body: {
        width: "90%",
        height: "60%",
        textAlign: "justify",
        color: "black",
    },
    footer: {
        width: "100%",
        height: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    cards: {
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap"
    }
})



const Cards = ({ post }) => {

    const classes = useStyles();


    return (
        <Card className={classes.root} key={post.id}>
            <div className={classes.header}>
                <h4>{post.title}</h4>
            </div>
            <div className={classes.body}>
                <p>{post.body}</p>
            </div>
            <CardFooter className={classes.footer}>
                ID: {post.id}
            </CardFooter>
        </Card>
    )

}

export default Cards;