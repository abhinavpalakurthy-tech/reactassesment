import React, { useRef, useEffect, useState } from 'react'
import { select, axisBottom, axisLeft, scaleLinear, scaleBand } from 'd3'

const BarChart = ({data}) => {

    const svgRef = useRef();

    useEffect(() => {    
        const svg = select(svgRef.current);
        const margin = { top: 0, right: 10, bottom: 20, left: 0 },
        w = 500 - margin.left - margin.right,
        h = 250 - margin.top - margin.bottom;

        svg.attr('width', w)
        .attr('heigth', h)  
            
        const xScale = scaleBand()
        .domain(data.map((value, index) => index))
        .range([0, w])
        .padding(0.5)

        const yScale = scaleLinear()
        .domain([0, 20])
        .range([h,0])

        const colorScale = scaleLinear()
            .domain([0, 20])
            .range(['grey', 'blue'])
        
        const xAxis = axisBottom(xScale).ticks(data.length - 1).tickFormat(index => data[index].text)

        svg.select('.x-axis')
        .style('transform','translateY(' + h + 'px)')
        .call(xAxis)

        const yAxis = axisLeft(yScale).ticks(5).tickFormat(index => index)

        svg.select('.y-axis')
        .style('transform','translateX(0px)')
        .call(yAxis)       
        
        //x axis gridline
        const make_x_gridlines = axisBottom(xScale)
        .ticks(data.length - 1)
        .tickSize(h)
        .tickFormat('')

        //y axis gridline
        const make_y_gridlines = axisLeft(yScale)
        .ticks(5)
        .tickSize(-w)
        .tickFormat('')

        //x axis gridline generation
        svg
        .append('svg:g')
        .attr('class','grid')
        .call(make_x_gridlines) //important never write make_x_gridlines()
        .selectAll('.tick')        
        .attr('opacity', function() { return 0.2; })

        //y axis gridline generation
        svg
            .append('svg:g')
            .attr('class','grid')
            .call(make_y_gridlines)
            .selectAll('.tick')        
            .attr('opacity', function() { return 0.2; })

        svg
            .selectAll('.bar')
            .data(data)
            .join('rect')
            .attr('class', 'bar')        
            .attr('fill', (value) => colorScale(value.length))
            .attr('x', (value, index) => xScale(index))
            .attr('y', -h)        
            .style('transform', 'scale(1, -1)')
            .attr('width', xScale.bandwidth())
            .attr('height', value => h - yScale(value.length))

    },[data])

    return(
        <svg ref = {svgRef} style={{marginLeft: '20px', overflow: 'visible', width: '500px', height: '250px'}}>
            <g className='x-axis'></g>
            <g className='y-axis'></g>
        </svg>
    )
}

export default BarChart