import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium consectetur excepturi inventore vel saepe alias quas amet, natus est, aspernatur quos iusto fugit illum porro aliquid consequatur nulla? Ex? Saepe a quidem deserunt autem? Architecto, ipsam! Sed deleniti exercitationem nisi laudantium blanditiis voluptatem error unde hic distinctio nemo natus, facere saepe culpa. Consectetur, ut mollitia quo temporibus suscipit sapiente. Rem consequuntur animi officiis reprehenderit dolorem rerum nisi repudiandae dicta deleniti laborum! Dignissimos eaque consequatur veritatis. Laborum iste minima saepe! Unde soluta officia ea voluptatum cumque mollitia corporis enim optio?Fuga dolor recusandae voluptates hic dolore ea molestias totam itaque harum eius quis nesciunt placeat nam iure libero quae, quam dolorum amet reprehenderit eligendi possimus nihil odit. Laborum, odio reiciendis.Earum accusantium dolorum cumque exercitationem, atque quis laborum esse nam rem perferendis nesciunt minima ea? Illum repudiandae similique iure reprehenderit porro, odio praesentium ipsa sapiente non eius. Accusantium, quidem porro?Doloremque quaerat fugit repellat debitis veritatis ullam, quae dolor, autem corrupti vitae facilis? Non magni, voluptates quos libero necessitatibus eius voluptatum. Nihil alias deleniti doloremque magni quas vitae cupiditate delectus.Voluptatem expedita repudiandae sint voluptates natus recusandae assumenda suscipit accusamus tempore aspernatur ipsam mollitia, dolores adipisci beatae! Blanditiis neque facere est alias rem, soluta vero iure eum voluptates repudiandae beatae.'
    }
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const {fontFamily, fontSize, color}= this.props
    return (
      <div className="textContainer">
        <textarea 
          style={{fontFamily, fontSize, color}}
          onChange={this.updateText}
          value={this.state.text} 
          placeholder='Start typing your thoughts here!'
          cols="90"
          rows="30">
        </textarea>
      </div>
    )
  }
}




