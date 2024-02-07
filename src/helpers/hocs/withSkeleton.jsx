import Skeleton from "@/components/Skeleton/Skeleton.jsx";

export default function withSkeleton(Component, type, count, direction) {
    return function WithSkeleton(props) {
        const {isLoading, ...restProps} = props;

        if (isLoading) {
            return <Skeleton type={type} count={count} directory={direction}/>
        }

        return <Component {...restProps}/>
    }
}
