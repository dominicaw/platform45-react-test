import CardFlyoutProps from '@/interfaces/CardFlyout'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './styles.module.scss'

export default function CardFlyout({ isOpen }: CardFlyoutProps) {
  return (
    <div className={clsx(styles.container, isOpen ? styles.active : '')}>
      <h2>Some stuff</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod
        euismod felis, in luctus odio bibendum sit amet. Pellentesque vel mauris
        vel odio eleifend ultrices. In volutpat, justo nec cursus aliquet,
        libero eros ultrices ex, eget varius arcu nunc ut justo. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Fusce bibendum tellus nec dapibus auctor. Praesent dignissim est nec
        malesuada ultricies. Suspendisse vel arcu scelerisque, eleifend sapien
        nec, semper justo. Proin sit amet dolor vitae nunc porttitor efficitur.
        Sed a viverra dui. Donec a fermentum dolor. Sed sollicitudin varius
        velit, nec pellentesque elit aliquam sit amet. Integer et erat vitae
        ligula faucibus scelerisque. In hac habitasse plate
      </p>
    </div>
  )
}

CardFlyout.propTypes = {
  onClick: PropTypes.bool,
}
