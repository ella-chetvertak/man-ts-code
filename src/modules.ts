import React from "react"

export interface IButtons {
    quest: string,
    letter: string,
    var: string,
    imgType?: string,
    source?: string,
    blocky?: boolean
}

export interface IQuest {
    quesNum: string,
    ques: string
}

export interface IHeading {
    children: React.ReactNode
}

export interface ICard {
    linkTo: string,
    spanText: string,
    spanTextTwo: string
}