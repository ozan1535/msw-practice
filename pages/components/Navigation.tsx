import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import styles from "../../styles/Home.module.css"
import { SharedColors, FontWeights, FontSizes, NeutralColors, Depths } from '@fluentui/theme';
import { makeStyles } from '@fluentui/react-components';


const navStyles: Partial<INavStyles> = {
    root: {
        width: "250px",
        height: '500px',
        boxSizing: 'border-box',
        fontSize: "30px",
    },
};

const navLinkGroups: INavLinkGroup[] = [
    {
        links: [
            {
                name: 'MSW Practice',
                url: '/',
                key: 'key1',
            },
            {
                name: 'Fetch Data',
                url: '/settings',
                key: 'key2',
            }
        ],
    },
];

const useStyles = makeStyles({
    root: {
        width: "250px",
        height: "100vh",
        position: "fixed",
        backgroundColor: "#64BDBA"
    }
})

const Navigation = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div
                className={styles.companyName}
                style={{
                    backgroundColor: NeutralColors.gray30,
                    boxShadow: Depths.depth8,
                    borderBottom: "3px solid #fff"
                }}>

                <p style={{
                    fontWeight: FontWeights.bold,
                    fontSize: FontSizes.size32,
                    color: SharedColors.greenCyan10
                }}>LiteCells</p>
            </div>
            <Nav
                styles={navStyles}
                groups={navLinkGroups}
            />
        </div>
    )
}

export default Navigation;