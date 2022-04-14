import React from 'react';
import {Container} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { textAlign } from '@mui/system';


const useStyles = makeStyles(() => ({
   infoWrapper: {
       paddingTop: "6vw",
       paddingBottom: "8vw",
       backgroundColor: "rgba(168,135,95, 0.6)"
   },
    infoHeader: {
        fontSize: "2rem",
        marginBottom: "40px"
    },
    infoText: {
        fontSize: "1rem",
        textAlign: 'justify'
    }
}))

function Info(props) {

    const classes = useStyles()

    return (
        <div className={classes.infoWrapper}>
            <Container maxWidth="lg">
                <h2 className={classes.infoHeader}>Как учить английский?</h2>

                <p className={classes.infoText}>
                    Вопрос очень сложный, и ответить на него коротко и однозначно практически невозможно. Каждый изучающий должен сам найти для себя приемлемую методику.
                    Бессмысленно рассчитывать на то, что можно выучить язык, только занимаясь на каких-то курсах или с репетитором. Люди, владеющие языком, могут лишь оказать тебе посильную помощь, объясняя что-то, подсказывая и задавая правильное направление твоей работе, т.е. приступая к изучению иностранного языка, нужно настраивать на труд прежде всего самого себя!
                    Самостоятельные занятия желательно сделать как можно более регулярными, лучше всего каждый день. Но при этом нельзя перерабатывать, чтобы не возникло чувство чрезмерной усталости и отвращения к языку. Считается, что часовых ежедневных занятий будет достаточно. Если время выделить крайне трудно, отводи вечером один час на чтение интересной тебе книги.
                    Не позволяй бичевать себя мысли о том, что у тебя ничего не получается и ты не способен к изучению языка — поверь, это главный тормоз в нормальной работе. Наоборот, нужно каждое выученное слово или понятую фразу заносить себе в актив, понимая, что только так, по крупицам, можно пополнить запас знаний — все приходит со временем.
                    Если представляется возможность проверить свои знания, не стесняйся, пользуйся ими. Это, видимо, наша долгая "аквариумная" жизнь наложила на нас отпечаток собственной неполноценности в смысле общения на иностранном языке. Мы боимся открыть рот даже в тех случаях, когда понятно, что сказать и как. Мол, вот сейчас все начнут смеяться над моим корявым произношением и моими ошибками. Между тем, по-английски говорят уже практически во всем мире, причем многие с ошибками, но при этом все понимают друг друга и никто не умирает от стыда за свое произношение или грамматические неточности.
                </p>

            </Container>

        </div>
    );
}

export default Info;