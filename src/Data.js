export const API_KEY='AIzaSyD0tqgkysst72G_OIwjCGw6b4qizta6iro';

export const value_converter=(value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+'M';
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+'K';
    }
    else
    {
        return value;
    }
}
