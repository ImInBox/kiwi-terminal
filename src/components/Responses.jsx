export function Baner() {
    return (
        <p className="text-[#cbc57e]">
            {" "}_    _  _______  _       _  _______     _______  ______  _____    __   __   _______  _     _   _____   _    <br />   
            (_)  (_)(_______)(_)  _  (_)(_______)   (__ _ __)(______)(_____)  (__)_(__) (_______)(_)   (_) (_____) (_)      <br />
            (_)_(_)    (_)   (_) (_) (_)   (_)         (_)   (_)__   (_)__(_)(_) (_) (_)   (_)   (__)_ (_)(_)___(_)(_)      <br />
            (____)     (_)   (_) (_) (_)   (_)         (_)   (____)  (_____) (_) (_) (_)   (_)   (_)(_)(_)(_______)(_)      <br />
            (_) (_)  __(_)__ (_)_(_)_(_) __(_)__       (_)   (_)____ ( ) ( ) (_)     (_) __(_)__ (_)  (__)(_)   (_)(_)____  <br />
            (_)  (_)(_______) (__) (__) (_______)      (_)   (______)(_)  (_)(_)     (_)(_______)(_)   (_)(_)   (_)(______) <br />
            © Copyright 2022 ImInBox <br />
            {" "}
        </p>
    )
} 

export function UnknowCommand() {
    return(
        <p className="text-[#cbc57e] underline">
            Unknow command
        </p>
    )
}

export function Help() {
    return(
        <p className="text-[#cbc57e]">
            <br />
            help - show command list <br />
            clear - clear terminal <br />
            author - kiwi termianl author <br />
            font - font used in kiwi terminal<br />
            {" "}
        </p>
    )
}

export function Author() {
    return(
        <p className="text-[#cbc57e]">
            <br />
            Hi Im the ImInBox author of this project! <br />
            My github: <a className="underline" href="https://github.com/ImInBox">github.com/ImInBox</a> <br />
            {" "}
        </p>
    )
}

export function Font() {
    return(
        <p className="text-[#cbc57e]">
            <br />
            Jet Brains Mono <br />
            Source: <a className="underline" href="https://www.jetbrains.com/lp/mono/">jetbrains.com/lp/mono</a> <br />
            {" "}
        </p>
    )
}
