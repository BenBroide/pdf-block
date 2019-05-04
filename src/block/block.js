const { RichText, MediaUpload, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button } = wp.components;
const el = wp.element.createElement;

// Import our CSS files
import './style.scss';
import './editor.scss';

const pdfThumb = ( pdfUrl ) => {
	return pdfUrl.replace( '.pdf' , '-pdf.jpg')
}




registerBlockType('card-block/main', {
	title: 'PDF Block',
	icon: 'upload',
	category: 'common',
	attributes: {
		title: {
			source: 'text',
			selector: '.card__title'
		},
		body: {
			type: 'array',
			source: 'children',
			selector: '.card__body'
		},
		imageAlt: {
			attribute: 'alt',
			selector: '.card__image'
		},
		imageUrl: {
			attribute: 'src',
			selector: '.card__image'
		}
	},
	edit({ attributes, className, setAttributes }) {

		const getImageButton = (openEvent) => {
			console.log(attributes );
			if(attributes.imageUrl) {
				return (
					<div>
					<img
						src={ pdfThumb(attributes.imageUrl) }
						onClick={ openEvent }
						style={{ width : '800px'}}
						className="image"
					/>
						<div>{attributes.title}</div>
					<div>{attributes.imageUrl}</div>
					</div>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button
							onClick={ openEvent }
							className="button button-large"
						>
							Select PDF File
						</Button>
					</div>
				);
			}
		};

		return (
			<div className="container">
				<MediaUpload
					onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url, title : media.title }); } }
					type="pdf"
					value={ attributes.imageUrl }
					render={ ({ open }) => getImageButton(open) }
				/>
			</div>
		);

	},

	save({ attributes }) {

		const pdfImage = (src, alt, title ) => {
			if(!src) return null;

			if(alt) {
				return (
					<div>

					<img
						className="card__image"
						src={ pdfThumb( src ) }
						alt={ alt }
						style={{width:'80px'}}
					/>
						<h3 className="card__title">{ title }</h3>
						<a href={src}>Download file</a>
					</div>
				);
			}

			// No alt set, so let's hide it from screen readers
			return (
				<div>
					<img
						className="card__image"
						src={ pdfThumb( src ) }
						alt={ alt }
						style={{width:'800px'}}
					/>
					<h3 className="card__title">{ title }</h3>

					<a href={src}>Download file</a>
				</div>
			);
		};

		return (
			<div className="card">
				{ pdfImage(attributes.imageUrl, attributes.imageAlt, attributes.title ) }
			</div>
		);
	}
});
