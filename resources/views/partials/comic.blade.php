@extends('layouts.layoutBase')

@section('pageTitle')
    {{$comicItem['series']}}
@endsection

@section('pageContent')
    <div class="container container-comic">
        <div class="comic-img">
            <img src="{{$comicItem['thumb']}}"  alt="{{$comicItem['title']}}">
        </div>
        <div class="comic-info">
            <h1>{{$comicItem['title']}}</h1>
            <h3>{{$comicItem['series']}}</h3>
            <h4>{{$comicItem['price']}}</h4>
            <h4>{{$comicItem['sale_date']}}</h4>


            <p>{{$comicItem['description']}}</p>
        </div>
    </div>
@endsection