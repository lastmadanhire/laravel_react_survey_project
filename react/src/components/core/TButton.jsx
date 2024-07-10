import { Button } from "@headlessui/react";
import { Link } from "react-router-dom";

function TButton({
    to='',
    circle=false,
    href='',
    link=false,
    target="_blank",
    color,
    children

}) {
    let classes=[
        "flex",
        'text-sm',
        "border",
        'border-2',
        'border-transparent',
        'whitespace-nowrap',
    ];
    if(link){
        classes=[
            ...classes,
            "transition-colors",
        ];
        switch(color){
            case 'indigo':
                classes=[
                    ...classes,
                    "text-indigo-500",
                    "focus:border-indigo-500",
                ];
                break;
            case 'red':
                classes=[
                    ...classes,
                    "text-red-500",
                    "focus:border-red-500",
                ];

        }
    }else{
        classes=[
            ...classes,
            "text-white",
            "focus:ring-2",
            "focus:ring-offset-2",
        ]
        switch(color){
            case 'indigo':
                classes=[
                    ...classes,
                    "bg-indigo-600",
                    "hover:bg-indigo-700",
                    "focus:ring-indigo-500",
                ];
                break;
            case 'red':
                classes=[
                    ...classes,
                    "bg-red-500",
                    "hover:bg-red-600",
                    "focus:ring-red-700",
                ];
                break;

        }
    }
    // check if circle button
    if(circle){
        classes=[
            ...classes,
            "h-8",
            "w-8",
            "items-center",
            "rounded-full",
            "text-sm",
        ]
    }else{
        classes=[
            ...classes,
            "py-2",
            "px-4",
            "rounded-md",
        ]

    }
  return (
    <>
    {href && (<a href={href} className={classes.join(" ")} target={target}>{children}</a>)}
    {to && (<Link to={href} className={classes.join(" ")}>{children}</Link>)}
    {!href && !to && (<button className={classes.join(" ")}>{children}</button>)}
    </>
  )
}

export default TButton
