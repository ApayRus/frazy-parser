export const input = `
# Book/App title

## {params} 

date: 2022.11.11 
author: John Doe 
tags: economics, politics, self education 
description: This app has made for some good purposes. 
cover: image123.jpg

# Lesson 1 

## {intro}

this is first level material (without subchapters)

## {params}

param1: param 1 
param2: param 2

## Info about the course {richText}

Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, modi?

## Schedule {richText}

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, aliquid.

# Lesson 2 

## Step 1 {fileCard}

Lorem 
ipsum 
dolor 
sit 
amet

## Step 2 {fileCard}

Lorem 
ipsum 
dolor 
sit 
amet

## Step 3 {richMedia}

Lorem 
ipsum 
dolor 
sit 
amet

`

const output = [
	{
		title: 'Book/App title',
		params: {
			date: '2022.11.11',
			author: 'John Doe',
			tags: 'economics, politics, self education',
			description: 'This app has made for some good purposes.',
			cover: 'image123.jpg'
		}
	},
	{
		title: 'Lesson 1',
		intro: 'this is first level material (without subchapters)',
		params: { param1: 'param 1', param2: 'param 2' },
		content: [
			{
				title: 'Info about the course',
				type: 'richText',
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, modi?'
			},
			{
				title: 'Schedule',
				type: 'richText',
				content:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, aliquid.'
			}
		]
	},
	{
		title: 'Lesson 2',
		content: [
			{
				title: 'Step 1',
				type: 'fileCard',
				content: `Lorem 
			ipsum 
			dolor 
			sit 
			amet`
			},
			{
				title: 'Step 2',
				type: 'fileCard',
				content: `Lorem 
			ipsum 
			dolor 
			sit 
			amet`
			},
			{
				title: 'Step 3',
				type: 'richMedia',
				content: `Lorem 
			ipsum 
			dolor 
			sit 
			amet`
			}
		]
	}
]
