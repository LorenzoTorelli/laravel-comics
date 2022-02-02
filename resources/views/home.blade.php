@extends('layouts.layoutBase')

@section('pageTitle')
    Home
@endsection

@section('pageContent')
    <div id="jumbo"></div>
    <div class="container container-main">
        @foreach ($comics as $item)
        <div class="comic">
            <div class="img-container">
                <img src="{{$item['thumb']}}"  salt="{{$item['title']}}">
            </div>
            <div class="text-container">
                <a href="#">{{$item['series']}}</a>
                {{-- <p>{{price}}</p> --}}
            </div>
        </div>
        @endforeach
    </div>
@endsection