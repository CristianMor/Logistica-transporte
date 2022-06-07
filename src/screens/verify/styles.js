import {colors, dim} from '../../utils';

export default {
    txt_container: {
        flex: 1,
        backgroundColor: colors.background_primary,
        alignItems: 'center',
        justifyContent: 'center',
        maginTop: 20,
        paddingHorizontal: 30,
    },
    txt: {
        color: colors.secondary,
        fontFamily: 'JosefinSans-Regular',
        textAlign: 'center',
        fontSize: 28,
    },
    img_container: {
        backgroundColor: colors.background_primary,
        flexDireciont: "column",
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '60%',
        paddingHorizontal: 40,
    },
    social_container: {
        width: '100%',
        paddingTop: 20,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_iniciar: {
        marginTop: 20,
        width: 250,
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.cuartery,
    }
}

