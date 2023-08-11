import React, {useRef, useEffect} from 'react'


interface  useOutsideClickProps  {
    listenCapturing:boolean,
    handler:() => null
}
export function useOutsideClick (handler, listenCapturing= true ) {

    const ref = useRef()


    useEffect(
        function () {
            function handleClick(e:React.MouseEvent<HTMLElement>) {
                if (ref.current && !ref.current.contains(e.target)) {
                    handler();
                }
            }

            document.addEventListener("click", handleClick, listenCapturing);

            return () =>
                document.removeEventListener("click", handleClick, listenCapturing);
        },
        [handler, listenCapturing]
    );

    return ref;
}
