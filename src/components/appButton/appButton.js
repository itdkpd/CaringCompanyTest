import React, { useCallback } from 'react'
import './appButton.css'

const AppButton = (props) => {
    let attr = {
        label: '',
        icon: '',
        color: '',
        backgroundColor: '',
        className: '',
    }

    let btnProps = [
        {
            code: 'accept',
            label: 'Accept',
            icon: 'fas fa-check',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'download',
            label: 'Download',
            icon: 'fas fa-download',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'upload',
            label: 'Upload',
            icon: 'fas fa-upload',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'search',
            label: 'Search',
            icon: 'fas fa-search',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'reset',
            label: 'Reset',
            icon: 'fas fa-sync-alt',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'clear',
            label: 'Clear',
            icon: 'fas fa-eraser',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'previous',
            label: 'Previous',
            icon: 'fas fa-chevron-left',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'next',
            label: 'Next',
            icon: 'fas fa-chevron-right',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'compute',
            label: 'Compute',
            icon: 'fas fa-calculator',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'edit',
            label: 'Edit',
            icon: 'fas fa-pencil-alt',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'cancel',
            label: 'Cancel',
            icon: 'fas fa-ban',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'add',
            label: 'Add',
            icon: 'fas fa-plus',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'save',
            label: 'Save',
            icon: 'fas fa-check',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'update',
            label: 'Update',
            icon: 'fas fa-check',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'create',
            label: 'Create',
            icon: 'fas fa-check',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'generate',
            label: 'Generate',
            icon: 'fas fa-cog',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'createcontinue',
            label: 'Create and<br/>Continue',
            icon: 'fas fa-plus',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'back',
            label: 'Back',
            icon: 'fas fa-chevron-left',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'delete',
            label: 'Delete',
            icon: 'fas fa-trash-alt',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'view',
            label: 'View',
            icon: 'fas fa-check',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'savechanges',
            label: 'Save Changes',
            icon: 'fas fa-check',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'newUser',
            label: 'New User',
            icon: 'fas fa-plus',
            className: 'app-btn primary-btn',
            backgroundColor: true,
        },
        {
            code: 'validate',
            label: 'Validate',
            icon: 'fas fa-search',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
        {
            code: 'discardChanges',
            label: 'Discard Changes',
            className: 'app-btn default-btn',
            backgroundColor: false,
        },
    ]

    let listOfColor = [
        { code: 'primary', value: 'primary-btn' },
        { code: 'success', value: 'success' },
        { code: 'info', value: 'info' },
        { code: 'warning', value: 'warning' },
        { code: 'danger', value: 'danger' },
        { code: 'dark', value: 'dark' },
    ]

    const { isDisabled, hide, appButton, id } = props
    const { className } = props

    const handleClick = useCallback(() => {
        if (props.handleClick) {
            props.handleClick()
        }
    }, [])

    btnProps = btnProps.filter((item) => {
        return item.code === appButton
    })

    if (btnProps.length === 1) {
        if (className) {
            btnProps[0].className = `${btnProps[0].className} ${className}`
        }

        attr = {
            label: btnProps[0].label,
            icon: btnProps[0].icon,
            className: btnProps[0].className,
            backgroundColor: btnProps[0].backgroundColor,
        }
    } else if (btnProps.length === 0) {
        if (appButton && (appButton.label || appButton.iconOnly)) {
            attr = appButton
            attr.className = 'app-btn'
            if (attr.color) {
                listOfColor = listOfColor.filter((item) => {
                    return item.code === attr.color
                })
                attr.className =
                    listOfColor.length > 0 ? `app-btn ${listOfColor[0].value}` : 'app-btn'
                attr.backgroundColor = listOfColor.length > 0
            } else {
                attr.className = 'app-btn default-btn'
                attr.backgroundColor = false
            }

            if (attr.icon) {
                attr.icon = `fas fa-${attr.icon}`
            }

            if (className) {
                attr.className = `${attr.className} ${className}`
            }
        }
    }

    if (hide) {
        attr.className += ' hideButton'
    }

    return (
        <button
            id={id}
            type="button"
            disabled={isDisabled}
            onClick={handleClick}
            className={attr.className}
        >
            {attr.icon && (
                <span
                    className={
                        attr.backgroundColor ? 'app-btn-icon-wrapper-full' : 'app-btn-icon-wrapper'
                    }
                >
                    <span className={attr.icon}></span>
                </span>
            )}
            {!attr.iconOnly && (
                <span className={attr.backgroundColor ? 'app-btn-text-full' : 'app-btn-text'}>
                    {attr.label}
                </span>
            )}
        </button>
    )
}

export default AppButton
