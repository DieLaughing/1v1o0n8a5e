import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// fake data generator

/* const getItems = count =>
Array.from({ length: count }, (v, k) => k).map(k => ({
  id: `${k+1}`,
  content: `item-${k+1}`,
})) */


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  
  return result
}

const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 ${grid}px 0 0`,
  borderRadius: '3px',
  background: isDragging ? '#1b1b25' : '#17171f',
  color: isDragging ? '#7FDBFF' : '#007BE6',
  transition: 'color .2s',
  // eslint-disable-next-line
  ...draggableStyle,
})

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? '#a09fa0' : '#6d6c6e',
  transition: 'background .4s',
  display: 'inline-flex',
  padding: grid / 2,
  borderRadius: '3px',
  overflow: 'auto'
})

const DropList = () => {
  
  const lsKey = 'ProjectList'
  let items = {items:[{id:'1', content: 'one'},{id:'2', content: 'two'},{id:'3', content: 'three'},{id:'4', content: 'four'},{id:'5', content: 'five'},{id:'6', content: 'six'},{id:'7', content: 'seven'},{id:'8', content: 'eight'},{id:'9', content: 'nine'}]}

  const [ value, setValue ] = useState(JSON.parse(localStorage.getItem(lsKey)) || items)
    
    useEffect(() => {
      const data = localStorage.getItem(lsKey)
      if (data) {
        setValue(JSON.parse(data))
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  useEffect(() => {
    localStorage.setItem(lsKey, JSON.stringify(value))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  
  const onDragEnd = (result) => {
    
    // dropped outside the list
    if (!result.destination) {
      return
    }
    
    items = reorder(
      value.items,
      result.source.index,
      result.destination.index
    )

    setValue({
      items,
    })

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {value.items && value.items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DropList